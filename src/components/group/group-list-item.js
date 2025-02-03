import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import  PeopleIcon from '@material-ui/icons/People'
const useStyles = makeStyles(theme => ({
    container:{
        cursor: 'pointer',
        textAlign: 'left',
        border: '2px solid #fff',
        borderRadius: '1rem',
        padding: '0 1rem',
        display: 'grid',
        gridTemplateColumns: '5fr 1fr',
        marginBottom: '1rem'
    },
    name:{
        color: theme.palette.primary.main
    }
}));

function GroupListItem({group, onClicked}) {
    const classes = useStyles();

    return (
        <div>
            {group && <div key={group.id} onClick={()=>onClicked(group.id)} className={classes.container}>
                        <h3><span className={classes.name}>{group.name}</span>: <LocationOnIcon/>{group.location}</h3>
                        <h3>
                            <PeopleIcon />{group.num_members}
                        </h3>
                        <p>{group.description}</p>
                    </div>
            }

        </div>
    );
}

export default GroupListItem;
