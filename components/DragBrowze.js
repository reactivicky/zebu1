import { useState } from 'react'
import { FileUploader } from 'baseui/file-uploader'

const DragBrowze = ({ onDrop, errorMessage, onRetry }) => {
	return (
		<FileUploader
			errorMessage={errorMessage}
			multiple={false}
			onDrop={onDrop}
			maxSize={1000000}
			accept={['image/png', 'image/jpg', 'image/jpeg']}
			onRetry={onRetry}
		/>
	)
}

export default DragBrowze
