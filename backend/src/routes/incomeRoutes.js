const express = require('express');
const { getAllIncomes, addIncome, updateIncome, deleteIncome } = require('../controllers/incomeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getAllIncomes);
router.post('/', authMiddleware, addIncome);
router.put('/:id', authMiddleware, updateIncome);
router.delete('/:id', authMiddleware, deleteIncome);

module.exports = router;
