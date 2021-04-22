const express = require('express')
const router = express.Router();
const crmcampaignController = require('../controllers/CrmCampaignController');
const CrmTemplateController = require('../controllers/CrmTemplateController');

router.get('/api',crmcampaignController.index)
router.post('/api',crmcampaignController.store)
router.get('/campaign/:id',crmcampaignController.search)
router.delete('/campaign/:id',crmcampaignController.delete)
router.post('/template', CrmTemplateController.store)
router.get('/template',CrmTemplateController.index)


module.exports = router;