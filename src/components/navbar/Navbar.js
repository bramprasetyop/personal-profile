// import React from 'react'
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';


// const GridExampleColumnCount = () => (

//   // <Responsive>
//   //   <Grid>
//   //     <Grid.Row columns={7}>
//   //       <Grid.Column />
//   //       <Grid.Column />
//   //       <Grid.Column />
//   //       <Grid.Column>
//   //         <Card className="Photo-image-card">
//   //           <Image
//   //             className="Photo-image"
//   //             src="https://s3-ap-southeast-1.amazonaws.com/photo.all/Screenshot_2018-08-22-11-12-2_com.instagram.android_1524997588641.jpg"
//   //           />
//   //         </Card>
//   //       </Grid.Column>
//   //       <Grid.Column />
//   //       <Grid.Column />
//   //     </Grid.Row>
//   //   </Grid>
//   // </Responsive>
// )

// export default GridExampleColumnCount

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
};

function GridExampleColumnCount(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Brama Prasetyo" src='https://s3-ap-southeast-1.amazonaws.com/photo.all/Screenshot_2018-08-23-11-12-33_com.instagram.android_1534997588641.jpeg' className={classes.bigAvatar} />
    </Grid>
  );
}

GridExampleColumnCount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridExampleColumnCount);

