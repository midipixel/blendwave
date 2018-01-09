var content = {

    general: {
        pt: {
            wavePanel: "Fonte Sonora",
            envelopePanel: "Amplitude e Pitch",
            filterPanel: "Filtro",
            fxPanel: "Efeitos",
            exportPanel: "Saída",
            disabledWarning: "Desabilitado pelo painel Saída"
        },
        en: {
            wavePanel: "Choose Sample",
            envelopePanel: "Amplitude and Pitch",
            filterPanel: "Filter",
            fxPanel: "Effects",
            exportPanel: "Output",
            disabledWarning: "Disabled by the Output Panel",
        }
    },

    fileHeader: {
        pt: {
            title: "Som Escolhido",
            hint: 'Aperte "P" para Preview'
        },
        en: {
            title: "Selected Sample",
            hint: 'Press "P" to Preview'
        }
    },

    wavePanel: {
        pt: {
            title: "Fonte Sonora",
            subtitle: "Escolha um som na Biblioteca para servir de base",
            loading: "Por Favor, aguarde. Carregando Som.",
            library: "Biblioteca",
            samplesList: "Lista de Sons",
            offsetTip: "Clique na onda sonora para escolher um ponto inicial de playback"
        },
        en: {
            title: "Choose Sample",
            subtitle: "Choose a a base sound sample from the Library",
            loading: "Loading sound file. Please wait.",
            library: "Library",
            samplesList: "Samples List",
            offsetTip: "Click on the waveform to choose a playback starting point"
        }
    },

    envelopePanel: {
        pt: {
            title: "(b)Amplitude(/b) e (b)Pitch(/b)",
            subtitle: "Altere o volume e a tonalidade do som",
            ampEnvelope: "Amp Envelope",
            ampEnvelopeDescription: "Modele o volume ao longo do tempo",
            ampOSC: "Oscilar Volume",
            ampOSCDescription: "Sacuda esse volume!",
            pitch: "Pitch",
            pitchDescription: "Altere a tonalidade de seu som.",
            pitchOSC: "Oscilar Pitch",
            pitchOSCDescription: "Sacuda o pitch!",
            attack: "Ataque/Fade In",
            release: "Repouso/Fade Out",
            amount: "Quantidade",
            depth: "Força",
            speed: "Velocidade"
        },
        en: {
            title: "(b)Amplitude(/b) & (b)Pitch(/b)",
            subtitle: "Fiddle with the sound sample's volume and pitch",
            ampEnvelope: "Amp Envelope",
            ampEnvelopeDescription: "Shape volume through time",
            ampOSC: "Volume Shake",
            ampOSCDescription: "Shake that volume!",
            pitch: "Pitch",
            pitchDescription: "Go chipmunk or ape on your sound!",
            pitchOSC: "Pitch Shake",
            pitchOSCDescription: "Shake the pitch!",
            attack: "Attack/Fade In",
            release: "Release/Fade Out",
            amount: "Amount",
            depth: "Depth",
            speed: "Speed"
        }
    },

    filterPanel: {
        pt: {
            title: 'Filtro',
            subtitle: 'Refine o som, filtrando as frequências altas ou baixas',
            filterType: 'Tipo de Filtro',
            filterTypeDescription: 'Escolha as frequências a filtrar',
            highpass: ["Passa Alta (HP)", "Filtra as baixas frequências"],
            lowpass: ["Passa Baixa (LP)", "Filtra as altas frequências"],
            none: "Nenhum",
            cutoff: 'Frequência de Corte',
            oscillateFilter: "Oscilar Filtro",
            oscillateFilterDescription: "Sacuda seu filtro!",
            speed: "Velocidade",
            depth: "Força"
        },
        en: {
            title: 'Filter',
            subtitle: 'Sculpt your sample by filtering high or low frequencies',
            filterType: 'Filter Type',
            filterTypeDescription: 'Choose the frequencies to filter',
            highpass: ["High Pass (HP)", "Filters low frequencies"],
            lowpass: ["Low Pass (LP)", "Filters high frequencies"],
            none: "None",
            cutoff: 'Cutoff Frequency',
            oscillateFilter: "Filter Shake",
            oscillateFilterDescription: "Shake that filter!",
            speed: "Speed",
            depth: "Depth"
        }
    },

    fxPanel: {
        pt: {
            title: "Efeitos",
            subtitle: "Experimente com seu som utilizando efeitos DSP!",
            none: ["Nenhum", "Nenhum efeito selecionado"],
            reverb: ["Reverb", "Simula a reverberação do som em ambientes fechados"],
            delay: ["Delay", "Toca o som original e com atraso, gerando um efeito de eco"],
            distortion: ["Distortion", "Distorce som de forma ruidosa, dando um caráter agressivo ao timbre"],
            flanger: ["Flanger", "Filtra frequências ao longo do tempo, conferindo uma estética incomum ao som"],
            ringmodulator: ["Ring Modulator", "Modula o som a partir de dois sinais, resultando em um timbre metálico e alienígena"],
            params: {
                // Had to create the extra level because distortion doubles both as effect and param
                time: "Tempo",
                decay: "Decaimento (Decay)",
                distortion: "Distorção",
                mix: "Mix",
                feedback: "Feedback",
                gain: "Ganho",
                speed: "Velocidade",
                depth: "Profundidade"
            }
        },
        en: {
            title: "Effects",
            subtitle: "Experiment with and spice up your sound sample by utilizing DSP Effects!",
            none: ["None", "No Effect Selected"],
            reverb: ["Reverb", "Simulates the reverberation of indoors locations."],
            delay: ["Delay", "The sample is replayed multiple times, creating an echo chamber."],
            distortion: ["Distortion", "The sample is harshly distorted, providing an agressive character."],
            flanger: ["Flanger", "Frequencies are filtered and modulated over time, resulting in an unusual aesthetic."],
            ringmodulator: ["Ring Modulator", "The sample is modulated by two signals, resulting in an alien and metalic timbre"],
            params: {
                // Had to create the extra level because distortion is both an effect and param
                time: "Time",
                decay: "Decay",
                distortion: "Distortion",
                mix: "Mix",
                feedback: "Feedback",
                gain: "Gain",
                speed: "Speed",
                depth: "Depth"
            }
        }
    },

    exportPanel: {
        pt: {
            title: "Saída",
            subtitle: "Ajuste seus parâmetros, exporte o resultado final em formato WAV, e faça o download",
            exportButton: "Exportar WAV",
            filesTitle: "Arquivos Exportados",
            envelopeStrip: "Amplitude & Pitch",
            filterStrip: "Filtro",
            fxStrip: "Efeitos",
            volumeStrip: "Volume",
            exportStrip: "Exportar",
            toggleOn: "On",
            toggleOff: "Off",
            downloadText: "Baixar Arquivo",
            exportPlaceholder: "Nenhum arquivo foi exportado. Aperte em 'Exportar WAV' quando terminar de trabalhar em seu efeito sonoro!",
            modal: {
                title: "Exportando",
                message: "Exportando arquivo WAV. Só um segundinho!"
            }
        },
        en: {
            title: "Output",
            subtitle: "Adjust your settings, export the final result to a WAV file, and download",
            exportButton: "Export WAV",
            filesTitle: "Exported Files",
            envelopeStrip: "Amplitude & Pitch",
            filterStrip: "Filter",
            fxStrip: "Effects",
            volumeStrip: "Volume",
            exportStrip: "Export",
            toggleOn: "On",
            toggleOff: "Off",
            downloadText: "Download File",
            exportPlaceholder: "No exported files. Press 'Export WAV' when you are done working on your sound effect!",
            modal: {
                title: "Exporting",
                message: "Exporting WAV File. Just a sec!"
            }
        }
    },

    credits: {
        pt: {
            title: "Credits",
            description: "O Blendwave é um projeto de uma pessoa, mas sua existência não seria possível sem o trabalho destas pessoas incríveis:",
            samples: {
                title: "Samples de Áudio",
                list: [
                    {
                        name: "Archive.org",
                        link: "archive.org",
                        description: "Múltiplas samples CC0"
                    },                    {
                        name: "Atom Splitter",
                        link: false,
                        description: "Games and 8 Bit Kit, Bird Calls"
                    },
                    {
                        name: "Freesound",
                        link: "https://freesound.org/",
                        description: "Sons dos usuários: lolamadeus, klankbeeld, newagesoup, eflextheseounddesigner, eardeer, not-danny2462, railgun, toiletrolltube, cribbler, nwlandi, audionautics, slave2thelight, nebulousflynn, productionnow, richerlandtv, slanesh, cgeffex, lonemonk, ali-k, markedit, enric592, kiodo, madmini, toam, laribum, zaem, cliftonmcarlson, thiagoriedel, willybilly1984, inspectorj, dycmaster, euphrosyyn."
                    },
                    {
                        name: "Kenney",
                        link: "http://www.kenney.nl",
                        description: "Free Audio Assets"
                    },
                    {
                        name: "Murilo Romera",
                        link: "http://muriloromera.com/",
                        description: "Donator of multiple sounds"
                    },
                    {
                        name: "Open Game Art",
                        link: "https://opengameart.org",
                        description: "Diversas samples CC0"
                    },
                    {
                        name: "Soundbible.com",
                        link: "http://www.soundbible.com",
                        description: "Recordings by Daniel Simion"
                    },
                    {
                        name: "Soundimage.org",
                        link: "http://soundimage.org/",
                        description: "Sound Effects by Eric Matyas"
                    },
                    {
                        name: "Volterock & undocument",
                        link: "http://www.volterock.com/",
                        description: "Vocal Hazard Pack vol.I and II"
                    },
                    {
                        name: "Wikimedia",
                        link: "https://commons.wikimedia.org",
                        description: "Audio files of animal sounds from the United States Fish and Wildlife Service"
                    }
                ]
            },
            tech: {
                title: "Tecnologia",
                list: [
                    {
                        name: "Anime.js",
                        link: "http://animejs.com/",
                        description: "Utilizada em algumas animações de UI."
                    },
                    {
                        name: "Pizzicato.js",
                        link: "https://github.com/alemangui/pizzicato",
                        description: "A engine de áudio do Blendwave. Uma ótima biblioteca para trabalhar com samples na Web Audio API."
                    },
                    {
                        name: "RecorderJS",
                        link: "https://github.com/mattdiamond/Recorderjs",
                        description: "Utilizada para gravar a saída de som do app e consodilá-la num arquivo WAV."
                    },
                    {
                        name: "Vue JS",
                        link: "https://vuejs.org",
                        description: "É onde a maior parte da lógica do app foi escrita. Eu adoro trabalhar com essa lib!"
                    },
                    {
                        name: "Wavesurfer",
                        link: "https://wavesurfer-js.org/",
                        description: "As visualizações dos arquivos de som são geradas com esta biblioteca."
                    },
                    {
                        name: "Zepto",
                        link: "http://zeptojs.com/",
                        description: "Porque as vezes tudo que você quer é um açúcar sintático estilo jQuery!"
                    }
                ]
            }
        },
        en: {
            title: "Credits",
            description: "Blendwave is a one-man endeavour, but its existence wouldn't be possible without the work and/or help from these amazing people:",
            samples: {
                title: "Audio Samples",
                list: [
                    {
                        name: "Archive.org",
                        link: "http://archive.org",
                        description: "Multiple CC0 samples"
                    },                    {
                        name: "Atom Splitter",
                        link: false,
                        description: "Games and 8 Bit Kit, Bird Calls"
                    },
                    {
                        name: "Freesound",
                        link: "https://freesound.org/",
                        description: "Sounds from users: lolamadeus, klankbeeld, newagesoup, eflextheseounddesigner, eardeer, not-danny2462, railgun, toiletrolltube, cribbler, nwlandi, audionautics, slave2thelight, nebulousflynn, productionnow, richerlandtv, slanesh, cgeffex, lonemonk, ali-k, markedit, enric592, kiodo, madmini, toam, laribum, zaem, cliftonmcarlson, thiagoriedel, willybilly1984, inspectorj, dycmaster, euphrosyyn."
                    },
                    {
                        name: "Kenney",
                        link: "http://www.kenney.nl",
                        description: "Free Audio Assets"
                    },
                    {
                        name: "Murilo Romera",
                        link: "http://muriloromera.com/",
                        description: "Donator of multiple sounds"
                    },
                    {
                        name: "Open Game Art",
                        link: "https://opengameart.org",
                        description: "Too many CC0 Sound Effects to mention!"
                    },
                    {
                        name: "Soundbible.com",
                        link: "www.soundbible.com",
                        description: "Recordings by Daniel Simion"
                    },
                    {
                        name: "Soundimage.org",
                        link: "http://soundimage.org/",
                        description: "Sound Effects by Eric Matyas"
                    },
                    {
                        name: "Volterock & undocument",
                        link: "http://www.volterock.com/",
                        description: "Vocal Hazard Pack vol.I and II"
                    },
                    {
                        name: "Wikimedia",
                        link: "https://commons.wikimedia.org",
                        description: "Audio files of animal sounds from the United States Fish and Wildlife Service"
                    }
                ]
            },
            tech: {
                title: "Technology",
                list: [
                    {
                        name: "Anime.js",
                        link: "http://animejs.com/",
                        description: "Used on some UI animations."
                    },
                    {
                        name: "Pizzicato.js",
                        link: "https://github.com/alemangui/pizzicato",
                        description: "Blendwave's audio engine. A great Web Audio API library to work with audio samples."
                    },
                    {
                        name: "RecorderJS",
                        link: "https://github.com/mattdiamond/Recorderjs",
                        description: "Used to record the app's output and bounce it to a WAV file."
                    },
                    {
                        name: "Vue JS",
                        link: "https://vuejs.org",
                        description: "Is where most of the App logic was written. I like it very much!"
                    },
                    {
                        name: "Wavesurfer",
                        link: "https://wavesurfer-js.org/",
                        description: "The audio file visualizations are generated with this lib."
                    },
                    {
                        name: "Zepto",
                        link: "http://zeptojs.com/",
                        description: "Because sometimes you just need some jQueryish syntatic sugar"
                    }
                ]
            }
        }
    }
}
