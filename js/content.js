const content = {

    general: {
        pt: {

        },
        en: {

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
            subtitle: "Escolha um som para servir de base",
            loading: "Por Favor, aguarde. Carregando Som."
        },
        en: {
            title: "Sound Source",
            subtitle: "Choose a base sound sample to start",
            loading: "Loading sound file. Please wait."
        }
    },

    envelopePanel: {
        pt: {
            title: "Amplitude e Pitch",
            subtitle: "Altere o volume e a tonalidade do som",
            ampEnvelope: "Amp Envelope",
            ampOSC: "Oscilar Volume",
            pitch: "Pitch",
            pitchOSC: "Oscilar Pitch",
            attack: "Ataque",
            release: "Repouso (Release)",
            amount: "Quantidade",
            depth: "Força",
            speed: "Velocidade"
        },
        en: {
            title: "Amplitude and Pitch",
            subtitle: "Fiddle with the sound sample's volume and pitch",
            ampEnvelope: "Amp Envelope",
            ampOSC: "Volume Shake",
            pitch: "Pitch",
            pitchOSC: "Pitch Shake",
            attack: "Attack",
            release: "Release",
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
            highpass: ["Passa Alta (HP)", "Filtra as baixas frequências"],
            lowpass: ["Passa Baixa (LP)", "Filtra as altas frequências"],
            none: "Nenhum",
            cutoff: 'Frequência de Corte',
            oscillateFilter: "Oscilar Filtro",
            speed: "Velocidade",
            depth: "Força"
        },
        en: {
            title: 'Filter',
            subtitle: 'Refine o som, filtrando as frequências altas ou baixas',
            filterType: 'Tipo de Filtro',
            highpass: ["Passa Alta (HP)", "Filtra as baixas frequências"],
            lowpass: ["Passa Baixa (LP)", "Filtra as altas frequências"],
            none: "Nenhum",
            cutoff: 'Frequência de Corte',
            oscillateFilter: "Oscilar Filtro",
            speed: "Velocidade",
            depth: "Força"
        }
    },

    fxPanel: {
        pt: {
            title: "Efeitos",
            subtitle: "Experimente com seu som utilizando efeitos DSP!",
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
            subtitle: "Experiment with your sound sample by utilizing DSP Effects!",
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

        },
        en: {

        }
    },

}
