import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    dateTime: {
        fontSize: '18px',
        marginRight: '3px',
        marginTop: '10px',
        color: theme.colors.mainAccentColor
    },
    memberContainer:{
        display: 'grid',
        gridTemplateColumns: 'auto 5fr 1fr',
        alignItems: 'center',
    },
    gold: {
        color: 'gold'
    },
    silver: {
        color: 'silver'
    },
    bronze: {
        color: 'brown'
    }
}));

function GroupListItem({group, onClicked}) {
    const classes = useStyles();

    return (
        <div>
            {group && <div key={group.id} onClick={()=>onClicked(group.id)}>
                        <p>{group.name}: {group.location}</p>
                    </div>
            }

        </div>
    );
}

export default GroupListItem;
