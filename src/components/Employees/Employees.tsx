import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import PersonIcon from '@material-ui/icons/Person'
import WorkIcon from '@material-ui/icons/Work'
import AddIcon from '@material-ui/icons/Add'

import Employee from '../../types/Employee'

import './Employees.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 800
  }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

type EmployeesProps = {
  employees: Array<Employee> | []
  loading: Boolean
  onAddEmployee: Function
}

const Employees = (props: EmployeesProps) => {
  const [newName, setNewName] = React.useState<string>('')
  const [newEmail, setNewEmail] = React.useState<string>('')
  const [newPosition, setNewPosition] = React.useState<string>('')
  const { employees, loading, onAddEmployee } = props

  return (
    <div data-testid="employees" className="employees-wrapper">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <StyledTableCell>
              <div className="flex-vertical-center">
                <PersonIcon />
                <span>Name</span>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="flex-vertical-center right">
                <AlternateEmailIcon />
                <span>Email</span>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="flex-vertical-center right">
                <WorkIcon />
                <span>Position</span>
              </div>
            </StyledTableCell>
          </TableHead>
          <TableBody>
            {employees?.map((employee) => (
              <StyledTableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell align="right">
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                </TableCell>
                <TableCell align="right">{employee.position}</TableCell>
              </StyledTableRow>
            ))}
            <StyledTableRow>
              <TableCell tabIndex={0}>
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  type="text"
                  placeholder="New name"
                />
              </TableCell>
              <TableCell tabIndex={1} align="right">
                <input
                  className="right"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  type="text"
                  placeholder="New email"
                />
              </TableCell>
              <TableCell tabIndex={2} align="right">
                <input
                  className="right"
                  value={newPosition}
                  onChange={(e) => setNewPosition(e.target.value)}
                  type="text"
                  placeholder="New position"
                />
              </TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <TableCell colSpan={3} align="right">
                <div className="flex-vertical-center right">
                  <span className="loading">
                    {loading && (
                      <CircularProgress data-testid="progress-icon" size={20} />
                    )}
                  </span>
                  <Button
                    data-testid="add-button"
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => {
                      onAddEmployee({
                        name: newName,
                        email: newEmail,
                        position: newPosition
                      })

                      setNewEmail('')
                      setNewName('')
                      setNewPosition('')
                    }}
                  >
                    Add
                  </Button>
                </div>
              </TableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Employees
