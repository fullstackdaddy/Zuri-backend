const { Router } = require("express");
const trackTwoRoutes = require("./trackTwoRoutes");
const router = Router();

// router.use("/user", userRouter);
// router.use("/expense", expenseRouter);
router.use("/api/v1/calculate", trackTwoRoutes);

module.exports = router;
