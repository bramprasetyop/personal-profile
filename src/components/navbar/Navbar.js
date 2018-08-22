import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const GridExampleColumnCount = () => (
  <Grid>
    <Grid.Row columns={7}>
      <Grid.Column />
      <Grid.Column />
      <Grid.Column />
      <Grid.Column>
        <Card className="Photo-image-card">
          <Image
            className="Photo-image"
            src="https://00e9e64bace3f038c57bbe917664a9c1e78341fb39843408cf-apidata.googleusercontent.com/download/storage/v1/b/file-uploader/o/pas%20foto.jpg?qk=AD5uMEsGrCkUxrKyk21TvoMJjTHAWqagYqCtmbgsmJrlrmenkrqX2wZAHCrqLyRuK1Ta89L0WOIqDCF5mKDzr88wfW5ymhIx2JO3-go_KFTOMrXYAQEL5Uw-zMFqPpv1tCPRyL7j1sVNGAvYbqNktXssW43naOnJ_n1xWRLY2NbgBKjxNSPw_7CpkHoMODLqCqfSaLCVwaZ3U6S5fRHrApw4pUoI_EhsxN_OxYuuajrp4sk-jRIBAMDE42IcgZ-00MqYPhGvI178FyyhAuR1yg-gA_ABw3xeQogagYNjRdcTcW4y2mB7E9J0dGdGm21hGr2Pix5o5Qguai7HFASpAg7jl9emQwrp585xuMCT8HVMtHsoMLmfc6-ahzbW00AFEUq-FM43JbgWBapuEzizAicWKeRUVA2XrIy4AgU4Y9sUUdNk3vjr01PTeV04Zjwu5tfNPpk7KEzD1UI4TLpP2Ag4x3UG_LLGQ3bYzeGJQ6mIGmYQ8AksxGjrKWGdEWCVRJX9HJjCoFLp6y3jxVkzi6SPCYtE8SraP_PsATJRtU19G54KuQWUIYe_pUdZTCKQ7oEvhpMfBdLJ83IbrInxuezHk9g7IxVE3SMajXt06y1u6ne5yR-61vbJ5urJq9Xgg48VyIuI2EHVqGptziSTvZKFFLDAsug9CQhtu419h5EGVBve2Oihs8pKaEyUz9yv9f2EeXyTQnZse309mjjoZplwUWFf-ZhvC9k1lGRhhXCqWW_G6_pvbkA"
          />
        </Card>
      </Grid.Column>
      <Grid.Column />
      <Grid.Column />
    </Grid.Row>
  </Grid>
)

export default GridExampleColumnCount
