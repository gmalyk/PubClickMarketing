import React, { useState, createContext, useEffect } from 'react'
import { ReadObject, SaveObject } from '../services/storage'
 
import { optionsLanguage } from 'utils/options'

export const CoreContext = createContext({})

export const CoreState = ({ children }) => {
      
	const [ modal, setModal ] = useState(null)  
	const [ user, setUser ] = useState( ReadObject('user') ? ReadObject('user') : [])  

	const [language, setLanguage] = useState(ReadObject('language') ? ReadObject('language') : optionsLanguage?.[0]?.id)
	const [translation, setTranslation] = useState(ReadObject('translation') ? ReadObject('translation') : null)

	const contextValue = {  
		user, setUser,
		modal, setModal,

		language, setLanguage,
		translation, setTranslation,
	}

	// to persist state when app reload  
    useEffect(() => { SaveObject('user', user) ;}, [user]) 

	useEffect(() => { SaveObject('language', language); }, [language])
	useEffect(() => { SaveObject('translation', translation); }, [translation])

	return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>
}

