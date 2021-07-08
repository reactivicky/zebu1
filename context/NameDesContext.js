import { createContext, useState } from 'react'

export const NameDescriptionContext = createContext()

const NameDesContext = ({ children }) => {
	const [file, setFile] = useState(null)
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	return (
		<NameDescriptionContext.Provider
			value={[file, setFile, name, setName, description, setDescription]}
		>
			{children}
		</NameDescriptionContext.Provider>
	)
}

export default NameDesContext
