const content = {

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
            disabledWarning: "Disabled by the Output Panel"
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
            title: "Choose Sample",
            subtitle: "Choose a sound sample from the library or upload your own file!",
            loading: "Loading sound file. Please wait."
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
            attack: "Ataque",
            release: "Repouso (Release)",
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
            toggleOn: "Ligado",
            toggleOff: "Desligado",
            downloadText: "Baixar Arquivo",
            exportPlaceholder: "Nenhum arquivo foi exportado. Aperte em 'Exportar WAV' quando terminar de trabalhar em seu efeito sonoro!"
        },
        en: {
            title: "Output",
            subtitle: "Ajust your settings, export the final result to a WAV file, and download",
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
            exportPlaceholder: "No exported files yet. Press 'Export WAV' when you are done working on your sound effect!"
        }
    },

}
