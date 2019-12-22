import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'
import TabIcon from '@material-ui/icons/Tab'

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

export default function TemporaryDrawer(props) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false
  })
  const boardId = `board${props.boardCount + 1}`
  const boardName = `ボード${props.boardCount + 1}`

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {props.boardList.map((boardList, index) => (
          <ListItem
            onClick={() => {
              props.onSelect(boardList.id)
            }}
            button
            key={index}
          >
            <ListItemIcon>
              <TabIcon />
            </ListItemIcon>
            <ListItemText primary={boardList.label} />
          </ListItem>
        ))}

        <Button
          style={{ marginLeft: 120, marginTop: 10, marginBottom: 10 }}
          variant="contained"
          color="primary"
          onClick={() => {
            props.onAddBoard(boardName, boardId)
          }}
        >
          Add Board
        </Button>
      </List>
      <Divider />
    </div>
  )

  return (
    <div style={{ width: '100px', marginTop: -11 }}>
      <Button onClick={toggleDrawer('left', true)}>
        <ViewHeadlineIcon color={'primary'} fontSize={'large'} />
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  )
}
