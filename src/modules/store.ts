export const ParticleColors = { baseColor: '#cfc4c4', color1: '#382e2e', color2: '#acaeaf' }

export const UnrealBloomParams = { enabled: true, threshold: 0, strength: 0.57, radius: 0.79 }

export const ParticlePositonParams: { [name: string]: { value: any; derive: () => any } } = {
	dt: { value: 0.8, derive: () => ParticlePositonParams.dt.value * 0.01 },
	frequency: { value: 0.47, derive: () => ParticlePositonParams.frequency.value },
	amplitude: { value: 0.66, derive: () => ParticlePositonParams.amplitude.value * 0.1 },
	divergence: { value: 1.58, derive: () => 1 + ParticlePositonParams.divergence.value * 0.01 }
}
// 