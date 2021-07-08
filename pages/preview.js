import { useContext, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Block } from 'baseui/block'
import { NameDescriptionContext } from '../context/NameDesContext'
import styles from '../styles/Preview.module.css'
import firebase from '../firebase'

const Preview = () => {
	const [file, , name, , description] = useContext(NameDescriptionContext)
	const [downloadURLLocation, setDownloadURLLocation] = useState('')

	const showImage = useCallback(async () => {
		let storageRef = firebase.storage().ref()
		let downloadURL = await storageRef
			.child('images/' + file.name)
			.getDownloadURL()
		setDownloadURLLocation(downloadURL)
	}, [file])

	useEffect(() => {
		if (file) {
			showImage()
		}
	}, [file, showImage])

	return (
		<div className={styles.Container}>
			<Block as='h3'>Preview Page</Block>
			<Block marginBottom='20px'>
				<Link href='/'>
					<a className={styles.HomeLink}>Home</a>
				</Link>
			</Block>
			{file && downloadURLLocation && (
				<Block
					marginBottom='40px'
					height='300px'
					width='100%'
					position='relative'
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={downloadURLLocation} alt='image' className={styles.Image} />
				</Block>
			)}
			<Block marginBottom='40px'>
				<h4>Image Name</h4>
				{name}
			</Block>
			<Block>
				<h4>Image Description</h4>
				{description}
			</Block>
		</div>
	)
}

export default Preview
