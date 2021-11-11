import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Switch from '@material-ui/core/Switch';

import styles from './Kitchen.module.scss';

const greenSwitch = withStyles()(Switch);

// const themeOrders = [
//   {
//     type: 'local',
//     done: true,
//     number: '1',
//     order: [
//       {
//         name: `Zia Giulia's Breakfast`,
//         params: [{ name: 'Coffee type', choosen: ['Latte'] }],
//       },
//       {
//         name: `Nonna Alba's Pizza`,
//         params: [
//           { name: 'Sauce', choosen: ['Tomato'] },
//           {
//             name: 'Toppings',
//             choosen: ['Olives', 'Red peppers', 'Green peppers'],
//           },
//           { name: 'Pizza crust', choosen: ['standard'] },
//         ],
//       },
//     ],
//   },
//   {
//     type: 'remote',
//     number: '123',
//     done: false,
//     order: [
//       {
//         name: `Zia Giulia's Breakfast`,
//         params: [{ name: 'Coffee type', choosen: ['Cappuccino'] }],
//       },
//       {
//         name: `Nonno Alberto's Salad`,
//         params: [{ name: 'Ingredients', choosen: ['Cucumber', 'Tomatoes'] }],
//       },
//     ],
//   },
// ];

export default function Kitchen() {
  // const switchStyle = styles.switchChecked;
  // let switchChecked = true;

  // function handleSwitch(boolean) {
  //   switchChecked = !boolean;
  //   return switchChecked;
  // }

  const [state, setState] = React.useState([
    {
      type: 'local',
      done: true,
      number: '1',
      order: [
        {
          name: `Zia Giulia's Breakfast`,
          params: [{ name: 'Coffee type', choosen: ['Latte'] }],
        },
        {
          name: `Nonna Alba's Pizza`,
          params: [
            { name: 'Sauce', choosen: ['Tomato'] },
            {
              name: 'Toppings',
              choosen: ['Olives', 'Red peppers', 'Green peppers'],
            },
            { name: 'Pizza crust', choosen: ['standard'] },
          ],
        },
      ],
    },
    {
      type: 'remote',
      number: '123',
      done: false,
      order: [
        {
          name: `Zia Giulia's Breakfast`,
          params: [{ name: 'Coffee type', choosen: ['Cappuccino'] }],
        },
        {
          name: `Nonno Alberto's Salad`,
          params: [{ name: 'Ingredients', choosen: ['Cucumber', 'Tomatoes'] }],
        },
      ],
    },
  ]);

  // const handleChange = (event) => {
  //   for (let order of state) {
  //     if (order.number === event.target.number) {
  //       setState([
  //         ...state,
  //         {
  //           number: event.target.number,
  //           done: event.target.checked,
  //           ...order,
  //         },
  //       ]);
  //     }
  //   }
  // };

  return (
    <div className={styles.component}>
      <h2>Kitchen</h2>
      {state.map((order) => (
        <Card
          key={order.number}
          className={`${styles.root} ${
            order.type === 'local' ? styles.table : styles.remote
          }`}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {order.type === 'local' ? 'Table' : 'Remote order'}:{' '}
              {order.number}
            </Typography>
          </CardContent>
          <div className={styles.order}>
            {order.order.map((dish) => (
              <Paper key={dish.name} className={styles.each} elevation={3}>
                <h3>{dish.name}</h3>
                {dish.params.map((param) => (
                  <h5 key={param.name}>
                    {param.name}: {param.choosen.join(', ')}
                  </h5>
                ))}
              </Paper>
            ))}
          </div>
          <CardActions>
            <Typography className={styles.switch} component="div">
              <Grid component="label" container>
                <Grid item>Waiting</Grid>
                <Grid item>
                  <Switch color="primary" checked={order.done} />
                </Grid>
                <Grid item>Done</Grid>
              </Grid>
            </Typography>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
