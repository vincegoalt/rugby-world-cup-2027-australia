'use client'

import { useState, useRef, useEffect } from 'react'
import { Language } from '../types'
import { LANGUAGES, LANGUAGE_NAMES } from '../lib/constants'
import { useTranslation } from '../lib/i18n'

interface LanguageSelectorProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
  className?: string
}

export default function LanguageSelector({ 
  currentLanguage, 
  onLanguageChange, 
  className = '' 
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const t = useTranslation(currentLanguage)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange(language)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t.language.select}
      >
        {/* Current language flag and name */}
        <span className="flex items-center space-x-2">
          <span className="text-lg" role="img" aria-hidden="true">
            {getLanguageFlag(currentLanguage)}
          </span>
          <span className="hidden sm:inline">
            {LANGUAGE_NAMES[currentLanguage]}
          </span>
          <span className="sm:hidden">
            {currentLanguage.toUpperCase()}
          </span>
        </span>
        
        {/* Chevron icon */}
        <svg
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {LANGUAGES.map((language) => (
              <button
                key={language}
                className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  language === currentLanguage
                    ? 'bg-green-50 text-green-900 dark:bg-green-900 dark:text-green-100'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => handleLanguageSelect(language)}
                role="menuitem"
                aria-current={language === currentLanguage ? 'true' : 'false'}
              >
                <span className="text-lg mr-3" role="img" aria-hidden="true">
                  {getLanguageFlag(language)}
                </span>
                <span>{LANGUAGE_NAMES[language]}</span>
                {language === currentLanguage && (
                  <svg
                    className="ml-auto h-4 w-4 text-green-600 dark:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Helper function to get flag emoji for each language
function getLanguageFlag(language: Language): string {
  const flags: Record<Language, string> = {
    en: '🇬🇧', // UK flag for English
    fr: '🇫🇷', // French flag
    es: '🇪🇸', // Spanish flag
    ja: '🇯🇵'  // Japanese flag
  }
  return flags[language] || '🌐'
}

// Language selector with URL-based routing support
interface LanguageSelectorWithRoutingProps {
  currentLanguage: Language
  currentPath: string
  className?: string
}

export function LanguageSelectorWithRouting({ 
  currentLanguage, 
  currentPath,
  className = '' 
}: LanguageSelectorWithRoutingProps) {
  const handleLanguageChange = (newLanguage: Language) => {
    let newPath = currentPath
    
    // Remove existing language prefix if present
    const langPrefixPattern = /^\/[a-z]{2}\//
    if (langPrefixPattern.test(currentPath)) {
      newPath = currentPath.replace(langPrefixPattern, '/')
    }
    
    // Add new language prefix (except for default English)
    if (newLanguage !== 'en') {
      newPath = `/${newLanguage}${newPath}`
    }
    
    // Handle root path
    if (newPath === '//' || newPath === `/${newLanguage}/`) {
      newPath = newLanguage === 'en' ? '/' : `/${newLanguage}`
    }
    
    // Navigate to new path
    window.location.href = newPath
  }

  return (
    <LanguageSelector
      currentLanguage={currentLanguage}
      onLanguageChange={handleLanguageChange}
      className={className}
    />
  )
}

// Compact language selector for mobile
interface CompactLanguageSelectorProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
  className?: string
}

export function CompactLanguageSelector({ 
  currentLanguage, 
  onLanguageChange, 
  className = '' 
}: CompactLanguageSelectorProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(event.target.value as Language)
  }

  return (
    <div className={`relative ${className}`}>
      <select
        value={currentLanguage}
        onChange={handleChange}
        className="appearance-none bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Select language"
      >
        {LANGUAGES.map((language) => (
          <option key={language} value={language}>
            {getLanguageFlag(language)} {language.toUpperCase()}
          </option>
        ))}
      </select>
      
      {/* Custom arrow */}
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-3 h-3 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}