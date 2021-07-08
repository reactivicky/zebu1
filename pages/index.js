import { useContext, useEffect, useState } from 'react'
import DragBrowze from '../components/DragBrowze'
import styles from '../styles/Home.module.css'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { useRouter } from 'next/router'
import { NameDescriptionContext } from '../context/NameDesContext'
import firebase from '../firebase'

export default function Home() {
	const [file, setFile, name, setName, description, setDescription] =
		useContext(NameDescriptionContext)

	const [errorState, setErrorState] = useState('')

	const router = useRouter()

	useEffect(() => {
		setName('')
		setDescription('')
		setFile(null)
	}, [setDescription, setFile, setName])

	const handleImageDrop = async (acceptedFiles, rejectedFiles) => {
		const [rejectedFile] = rejectedFiles
		if (rejectedFile) {
			setErrorState('File format wrong or file size too big')
		}

		const [file] = acceptedFiles
		if (file) {
			setFile(file)
			let bucketName = 'images'
			await firebase.storage().ref(`${bucketName}/${file.name}`).put(file)
		}
	}

	return (
		<div className={styles.Container}>
			{!file ? (
				<DragBrowze
					onDrop={handleImageDrop}
					errorMessage={errorState}
					onRetry={() => {
						setFile(null)
						setErrorState('')
					}}
				/>
			) : (
				<div>{file.name}</div>
			)}
			<Block marginTop='20px'>
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Project Name'
					clearOnEscape
				/>
			</Block>
			<Block marginTop='20px'>
				<Textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder='Project Description'
					clearOnEscape
				/>
			</Block>
			<Block marginTop='20px' display='flex' justifyContent='center'>
				<Button disabled={!file} onClick={() => router.push('/preview')}>
					Submit
				</Button>
			</Block>
		</div>
	)
}
