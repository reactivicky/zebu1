import '../styles/globals.css'
import { Client, Server } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import NameDesContext from '../context/NameDesContext'

const getHydrateClass = () =>
	document.getElementsByClassName('_styletron_hydrate_')

export const styletron =
	typeof window === 'undefined'
		? new Server()
		: new Client({
				// @ts-ignore
				hydrate: getHydrateClass(),
		  })

function MyApp({ Component, pageProps }) {
	return (
		<StyletronProvider value={styletron}>
			<BaseProvider theme={LightTheme}>
				<NameDesContext>
					<Component {...pageProps} />
				</NameDesContext>
			</BaseProvider>
		</StyletronProvider>
	)
}

export default MyApp
