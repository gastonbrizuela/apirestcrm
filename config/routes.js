const express = require('express')
const router = express.Router();
const crmcampaignController = require('../controllers/CrmCampaignController');
const CrmTemplateController = require('../controllers/CrmTemplateController');
const CustomerController = require('../controllers/CustomerController')
const CrmSegmentController = require('../controllers/CrmSegmentController')

router.get('/api',crmcampaignController.index)
router.post('/api',crmcampaignController.store)
router.get('/campaign/:id',crmcampaignController.search)
router.delete('/campaign/:id',crmcampaignController.delete)
router.post('/template', CrmTemplateController.store)
router.get('/template',CrmTemplateController.index)
router.get('/customer',CustomerController.index)
router.get('/customer/:id',CustomerController.search)
router.get('/customer/filter/:filter',CustomerController.filter)
router.post('/segment',CrmSegmentController.store)


module.exports = router;