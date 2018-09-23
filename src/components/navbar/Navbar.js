import React from 'react'
import { Grid, Image, Card, Responsive } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const GridExampleColumnCount = () => (
  <Responsive>
    <Grid>
      <Grid.Row columns={7}>
        <Grid.Column />
        <Grid.Column />
        <Grid.Column />
        <Grid.Column>
          <Card className="Photo-image-card">
            <Image
              className="Photo-image"
              src="https://s3-ap-southeast-1.amazonaws.com/photo.all/Screenshot_2018-08-23-11-12-33_com.instagram.android_1534997588641.jpg"
            />
          </Card>
        </Grid.Column>
        <Grid.Column />
        <Grid.Column />
      </Grid.Row>
    </Grid>
  </Responsive>
)

export default GridExampleColumnCount
