import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const products = [
  {
    id: 'cake',
    class: 'small',
    name: `Zio Stefano's Doughnut`,
    price: 9,
  },
  {
    id: 'breakfast',
    class: 'small',
    name: `Zia Giulia's Breakfast`,
    price: 9,
    params: {
      coffee: {
        label: 'Coffee type',
        type: 'radios',
        options: {
          latte: {
            label: 'Latte',
            price: 1,
            default: true,
          },
          cappuccino: {
            label: 'Cappuccino',
            price: 1,
          },
          espresso: {
            label: 'Espresso',
            price: 1,
          },
          macchiato: {
            label: 'Macchiato ',
            price: 1,
          },
        },
      },
    },
  },
  {
    id: 'pizza',
    name: `Nonna Alba's Pizza`,
    price: 20,
    params: {
      sauce: {
        label: 'Sauce',
        type: 'radios',
        options: {
          tomato: {
            label: 'Tomato',
            price: 0,
            default: true,
          },
          cream: {
            label: 'Sour cream',
            price: 2,
          },
        },
      },

      toppings: {
        label: 'Toppings',
        type: 'checkboxes',
        options: {
          olives: {
            label: 'Olives',
            price: 2,
            default: true,
          },
          redPeppers: {
            label: 'Red peppers',
            price: 2,
            default: true,
          },
          greenPeppers: {
            label: 'Green peppers',
            price: 2,
            default: true,
          },
          mushrooms: {
            label: 'Mushrooms',
            price: 2,
            default: true,
          },
          basil: {
            label: 'Fresh basil',
            price: 2,
            default: true,
          },
          salami: {
            label: 'Salami',
            price: 3,
          },
        },
      },
      crust: {
        label: 'pizza crust',
        type: 'select',
        options: {
          standard: {
            label: 'standard',
            price: 0,
            default: true,
          },
          thin: {
            label: 'thin',
            price: 2,
          },
          thick: {
            label: 'thick',
            price: 2,
          },
          cheese: {
            label: 'cheese in edges',
            price: 5,
          },
          wholewheat: {
            label: 'wholewheat',
            price: 3,
          },
          gluten: {
            label: 'with extra gluten',
            price: 0,
          },
        },
      },
    },
  },
  {
    id: 'salad',
    name: `Nonno Alberto's Salad`,
    price: 9,
    params: {
      ingredients: {
        label: 'Ingredients',
        type: 'checkboxes',
        options: {
          cucumber: {
            label: 'Cucumber',
            price: 1,
            default: true,
          },
          tomatoes: {
            label: 'Tomatoes',
            price: 1,
            default: true,
          },
          black_olives: {
            label: 'Olives',
            price: 1,
            default: true,
          },
          feta: {
            label: 'Feta cheese',
            price: 1,
          },
          cheese: {
            label: 'Cheese',
            price: 1,
          },
          herbs: {
            label: 'Fresh herbs',
            price: 1,
            default: true,
          },
          pepper: {
            label: 'Black pepper',
            price: 1,
          },
        },
      },
    },
  },
];

export default function WaiterOrderNew() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [expanded, setExpanded] = React.useState('');

  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function getProductParams(product) {
    let params = [];
    for (let param in product.params) {
      params.push(product.params[param]);
    }

    function getParamOptions(param) {
      let options = [];
      for (let option in param.options) {
        options.push(param.options[option]);
      }

      return (
        <div>
          {options.map((option) => (
            <FormControlLabel
              key={option.label}
              control={
                <Checkbox
                  checked={option.default}
                  // onChange={handleChange3}
                  name={option.label}
                />
              }
              label={`${option.label} $${option.price}`}
            ></FormControlLabel>
          ))}
        </div>
      );
    }

    return (
      <div>
        {params.map((param) => (
          <FormControl key={param.label} component="fieldset">
            <FormLabel component="legend">{param.label}</FormLabel>
            <FormGroup>{getParamOptions(param)}</FormGroup>
          </FormControl>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.component}>
      <h2>Order New</h2>
      <form className={styles.pickers} noValidate>
        <TextField
          className={styles.input}
          id="outlined-basic"
          label="ID"
          variant="outlined"
        />
        <FormControl className={styles.input} variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Table</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Table"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2017-05-24"
          className={styles.input}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="time"
          label="Time"
          type="time"
          defaultValue="08:00"
          className={styles.input}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <FormControl className={styles.input} variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Duration
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Duration"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </form>
      <Button className={styles.input} variant="contained" color="primary">
        Save
      </Button>
      <div>
        {products.map((product) => (
          <MuiAccordion
            key={product.id}
            square
            expanded={expanded === product.id}
            onChange={handleChange2(product.id)}
          >
            <MuiAccordionSummary
              aria-controls="panel1d-content"
              id={`${product.id}d-header`}
            >
              <Typography>
                {product.name} ${product.price}
              </Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails className={styles.card}>
              <div>{getProductParams(product)}</div>

              <div>
                <FormControl className={styles.input} variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Amount
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Amount"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {[1, 2, 3, 4, 5, 6].map((number) => (
                      <MenuItem key={number} value={number}>
                        {number}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  className={styles.input}
                  id="outlined-disabled"
                  variant="outlined"
                  label="Price"
                  defaultValue={'$123'}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <Button
                  className={styles.input}
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
              </div>
            </MuiAccordionDetails>
          </MuiAccordion>
        ))}
      </div>
    </div>
  );
}
