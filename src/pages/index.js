import React from 'react'
import { GlobalStyle } from '../components/globalStyle'
import SEO from '../components/seo';
import Layout from '../components/layout'


export const HomePage = () => {


return(
<>
			<GlobalStyle />
			<Layout >
				<h1>Hello</h1>
				<SEO title="Hem" keywords={[`Brand Wine Estates`, `Wine import`, `Simpsons Wine`, `hem`]} />

			</Layout>
		</>
)

}

export default HomePage