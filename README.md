State Management: It keeps track of the file content (fileContent), total word count (totalWords), loading state (isLoading), and a key to force re-rendering (key).

File Input Change Handling: The handleFileChange function is triggered when the user selects a file. It reads the content of the file using FileReader and updates the state with the file content and total word count. It also checks if the selected file is of type .txt.

Refresh Button Handling: The handleRefresh function is called when the "Refresh" button is clicked. It resets the file content, total word count, and increments the key to force re-rendering of the component.