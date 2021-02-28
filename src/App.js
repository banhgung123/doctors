import { Box, Container, Grid } from '@material-ui/core';
import Header from 'components/Header';
import FilterFeature from 'features/Filter';
import InfoFeature from 'features/Info';
import SortFeature from 'features/Sort';

function App() {
	return (
		<Container>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Header />
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Box display="flex">
						<Box>
							<SortFeature />
						</Box>
						<Box ml={3}>
							<FilterFeature />
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<InfoFeature />
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
