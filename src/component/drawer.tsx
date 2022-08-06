import { useState } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Toolbar,
  Typography,
  makeStyles,
  createStyles,
  Box,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      textDecoration: 'none',
      color: '#d0d1d5',
      fontSize: '20px',
      letterSpacing: '0.1em',
    },
    icon: { color: '#d0d1d5' },
    logo: { flexGrow: 1, cursor: 'pointer', color: '#d0d1d5' },
    draw: { background: 'red' },
  }),
)

function DrawerComponent() {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer
        anchor='top'
        style={{ width: 250 }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Toolbar style={{ backgroundColor: '#0b1127' }}>
          <Typography variant='h4' className={classes.logo}>
            SOCIETYKEY
          </Typography>
          <CloseIcon
            style={{ color: '#d0d1d5', cursor: 'pointer' }}
            onClick={() => setOpenDrawer(false)}
          />
        </Toolbar>
        <Box style={{ backgroundColor: '#0b1127' }}>
          <List>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to='/' className={classes.link}>
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to='/societykey' className={classes.link}>
                  Societykey
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to='/' className={classes.link}>
                  Society Localist
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to='/' className={classes.link}>
                  Society Rides
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComponent
