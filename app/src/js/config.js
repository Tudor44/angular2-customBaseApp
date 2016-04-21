System.config({
        packages: {        
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
});

System.import('app/src/ts/start')
       .then(null, console.error.bind(console));