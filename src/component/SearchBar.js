import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar({gonder}) {
 const [term, setTerm]=useState(' ');

const onFormSubmit=(event)=> {
    event.preventDefault();
    gonder(term);
}
console.log(`term`,term)

  const classes = useStyles();

  return (
    <Paper component="form" onSubmit={onFormSubmit} className={classes.root}>
      
      <InputBase
        className={classes.input}
        placeholder="Search "
        value={term}
        onChange={(e)=>setTerm(e.target.value)}
        
      />
       <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
     
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
       
      </IconButton>
    </Paper>
  );
}