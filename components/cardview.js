import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from 'react-responsive'

import FormHelperText from '@material-ui/core/FormHelperText'
import SortIcon from '@material-ui/icons/Sort'

import { 
  MenuItem, 
  Button, 
  FormControl, 
  InputLabel, 
  InputBase, 
  Select,
  GridList,
  GridListTile,
  Container,
  CssBaseline
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grow: {
    display: 'inline-block',
    flexGrow: 1,
  },
  formControl: {
    display: 'inline-block',
    margin: theme.spacing(2),
    minWidth: 120,
    color: '#fff'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 0,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 0,
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  addButton: {
    width: 'max-content',
  }
}));

const CardView = props => {
  const classes = useStyles()
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const cols = props.cols || []

  const [col, setCol, sort, setSort] = React.useState('')
  React.useEffect(() => {
    //setSort('date')
  }, []);

  const handleColChange = name => event => {
    setCol(event.target.value)
  }

  const handleSortChange = name => event => {
    setSort(event.target.value)
  }

  return (
    <cardview>
        {/*
      <Container>
        {cols.length > 0 &&
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="col-simple-select-label">Collection</InputLabel>
          <Select
            labelId="col-simple-select-label"
            id="col-simple-select"
            value={col}
            onChange={handleColChange}>
            <MenuItem value='all'>All</MenuItem>
            {cols.map(x => (
              <MenuItem value={x.id}>{x.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        }
        
        <FormControl className={classes.formControl}>
          <div className={classes.search}>
            <InputBase
              placeholder="#tag or keyword"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': '#tag or keyword' }}
            />
          </div>
          
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button variant="contained" color="primary" className={classes.addButton}>
            Add
          </Button>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sort-simple-select-label"><SortIcon />Sort by</InputLabel>
          <Select
            labelId="sort-simple-select-label"
            id="sort-simple-select"
            value={sort}
            onChange={handleSortChange}
          >
            <MenuItem value='date'>Date</MenuItem >
            <MenuItem value='level'>Stars</MenuItem >
            <MenuItem value='name'>Name</MenuItem>
          
          </Select>
        </FormControl>
      </Container>
      <hr/>*/}
      <GridList spacing={10} cellHeight={'auto'} cols={isTabletOrMobile? 2 : 4}>
        {props.cards.map((x, i) => (
          <GridListTile key={x.url}>
            <img src={x.url} className='card'/>
          </GridListTile>
        ))}
      </GridList>
      <style jsx global>{`

      `}</style>
    </cardview>
  )
}

export default CardView
