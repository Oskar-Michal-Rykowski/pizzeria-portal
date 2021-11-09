import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import styles from './Kitchen.module.scss';

export default function Kitchen() {
  return (
    <div className={styles.component}>
      <h2>Kitchen view</h2>
      <Card className={styles.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Table: 1
          </Typography>
        </CardContent>
        <div className={styles.order}>
          <Paper variant="outlined" />
          <Paper variant="outlined" square />
        </div>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card className={styles.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Remote Order: 1234
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
