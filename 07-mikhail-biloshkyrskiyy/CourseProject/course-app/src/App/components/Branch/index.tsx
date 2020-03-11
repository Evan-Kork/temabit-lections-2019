import React from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

import { iBranch } from '@/interfaces/iBranch'
// This import connects hook with styles
import useStyles from './makeStyle'
// Interface indicates
// what parameters are in the component
interface iProps {
    branches: iBranch[]
}
const Branch: React.FC<iProps> = (props: iProps) => {
    const makeClasses = useStyles()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    };

    return (
        <Paper className={makeClasses.root}>
            <TableContainer className={makeClasses.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Number</TableCell>
                            <TableCell>Adress</TableCell>
                            <TableCell>Locality</TableCell>
                            <TableCell>Format</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.values(props.branches).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: iBranch, index: number) => {
                            return (
                                <TableRow hover role="checkbox" key={index}>
                                    <TableCell>
                                        {row.number}
                                    </TableCell>
                                    <TableCell>
                                        {row.adress}
                                    </TableCell>
                                    <TableCell>
                                        {row.locality}
                                    </TableCell>
                                    <TableCell>
                                        {row.format}
                                    </TableCell>
                                    <TableCell>
                                        {row.description}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={Object.values(props.branches).length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default Branch