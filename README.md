# Blendwave

Blendwave is a sound design application inspired by the ease of use of samplers and the “sfxr family” of sound creation software. It uses the Web Audio API, mostly through the Pizzicato Library, to achieve most of the DSP functionalities.

This tool is being built as part of a master's thesis research, more about which can be read [here](https://repositorioaberto.uab.pt/handle/10400.2/6653).

The front end is developed with vueJS, in an unorthodox way. Components are written as PHP includes and compiled during runtime. Since the application is lean, though, this hasn't added a huge overhead so far, but a refactor to use proper .vue components and a more traditional build workflow will probably happen.

The tool is currently available for beta testing at http://beta.blendwave.net. 
