import PropTypes from 'prop-types'

const student = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
})

const message = PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    student: student.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
})

export default {
    ...PropTypes,
    student,
    message,
}