const { Router } = require("express");
const trackTwoRoutes = require("./trackTwoRoutes");
const router = Router();

// router.use("/user", userRouter);
// router.use("/expense", expenseRouter);
router.use("/stage2", trackTwoRoutes);

module.exports = router;
