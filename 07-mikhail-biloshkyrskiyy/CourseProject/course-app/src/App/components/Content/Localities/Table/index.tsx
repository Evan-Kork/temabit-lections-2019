import React from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

import { iLocalities } from '@/interfaces/iOffice'
// This import connects hook with styles
import useStyles from './makeStyle'
// Interface indicates
// what parameters are in the component
interface iProps {
    localities: iLocalities[]
}
const LocalitiesTable: React.FC<iProps> = (props: iProps) => {
    const makeClasses = useStyles()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper className={makeClasses.root}>
            <TableContainer className={makeClasses.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Parent</TableCell>
                            <TableCell>Uuid</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.values(props.localities).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: iLocalities, index: number) => {
                            return (
                                <TableRow hover role="checkbox" key={index}>
                                    <TableCell>
                                        {row.title_ua}
                                    </TableCell>
                                    <TableCell>
                                        {row.parent_title_ua}
                                    </TableCell>
                                    <TableCell>
                                        {row.uuid}
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
                count={Object.values(props.localities).length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default LocalitiesTable