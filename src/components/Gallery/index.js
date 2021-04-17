import React from 'react';
import styles from "./index.module.css"
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: "visible",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "60vw",
    height: 'auto',
    maxHeight: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function TitlebarGridList({tileData}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180}  cols={4} className={classes.gridList}>
        <GridListTile key="Subheader" style={{ height: 'auto', width: "60vw" }}>
           <h2 className={styles.heading}>Rent Locally</h2>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<><span>By {tile.author}</span><p> </p><span>{tile.distance} away</span></>}
          />

          </GridListTile>
         
        ))}
      </GridList>
    </div>
  );
}