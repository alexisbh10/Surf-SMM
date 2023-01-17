function ejecutar_python(){
	const spawn = require('child_process').spawn
	const pythonProcess = spawn('python', ['script_python.py'])
	let pythonResponse = ""
	
	pythonProcess.stdout.on('data', function(data){
		pythonResponse += data.toString()
	})

	pythonProcess.stdout.on('end', function(){
		console.log(pythonResponse)
	})

	pythonProcess.stdin.write('Darío')

	pythonProcess.stdin.end()
}
