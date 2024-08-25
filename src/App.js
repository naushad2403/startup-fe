// src/App.js

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Import custom CSS

function App() {
  const [data, setData] = useState({
    executiveSummary: {
      businessName: '',
      tagline: '',
      overview: ''
    },
    marketAnalysis: {
      industryOverview: '',
      targetMarket: '',
      marketOpportunity: ''
    },
    businessModel: {
      revenueStreams: '',
      pricingStrategy: ''
    },
    team: {
      founders: '',
      advisors: ''
    },
    competitiveAnalysis: {
      competitors: '',
      competitiveAdvantage: ''
    },
    customerValidation: {
      traction: '',
      caseStudies: ''
    },
    investmentOpportunity: {
      investmentTerms: '',
      exitStrategy: ''
    },
    legalInformation: {
      businessStructure: '',
      intellectualProperty: ''
    },
    video: null,
    companyReportExcel: null,
    companyReportPdf: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setData({
        ...data,
        [section]: { ...data[section], [field]: value }
      });
    } else {
      setData({ ...data, [name]: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file uploads and other data
    const formData = new FormData();
    formData.append('video', data.video);
    formData.append('companyReportExcel', data.companyReportExcel);
    formData.append('companyReportPdf', data.companyReportPdf);
    formData.append('executiveSummary', JSON.stringify(data.executiveSummary));
    formData.append('marketAnalysis', JSON.stringify(data.marketAnalysis));
    formData.append('businessModel', JSON.stringify(data.businessModel));
    formData.append('team', JSON.stringify(data.team));
    formData.append('competitiveAnalysis', JSON.stringify(data.competitiveAnalysis));
    formData.append('customerValidation', JSON.stringify(data.customerValidation));
    formData.append('investmentOpportunity', JSON.stringify(data.investmentOpportunity));
    formData.append('legalInformation', JSON.stringify(data.legalInformation));

    try {
      const response = await fetch('http://localhost:5001/submit-form', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      alert('There was a problem with your submission.');
      console.error('Error:', error);
    }
  };

  return (
    <Container className="my-5 p-4 border rounded shadow-lg bg-light">
      <h1 className="text-primary mb-4">Startup Pitch Form</h1>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-secondary">Executive Summary</h2>
        <Form.Group controlId="businessName">
          <Form.Label>Business Name</Form.Label>
          <Form.Control
            type="text"
            name="executiveSummary.businessName"
            value={data.executiveSummary.businessName}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="tagline">
          <Form.Label>Tagline</Form.Label>
          <Form.Control
            type="text"
            name="executiveSummary.tagline"
            value={data.executiveSummary.tagline}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="overview">
          <Form.Label>Business Overview</Form.Label>
          <Form.Control
            as="textarea"
            name="executiveSummary.overview"
            rows={3}
            value={data.executiveSummary.overview}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>

        <h2 className="text-secondary">Market Analysis</h2>
        <Form.Group controlId="industryOverview">
          <Form.Label>Industry Overview</Form.Label>
          <Form.Control
            as="textarea"
            name="marketAnalysis.industryOverview"
            rows={3}
            value={data.marketAnalysis.industryOverview}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="targetMarket">
          <Form.Label>Target Market</Form.Label>
          <Form.Control
            as="textarea"
            name="marketAnalysis.targetMarket"
            rows={3}
            value={data.marketAnalysis.targetMarket}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="marketOpportunity">
          <Form.Label>Market Opportunity</Form.Label>
          <Form.Control
            as="textarea"
            name="marketAnalysis.marketOpportunity"
            rows={3}
            value={data.marketAnalysis.marketOpportunity}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>

        <h2 className="text-secondary">Business Model</h2>
        <Form.Group controlId="revenueStreams">
          <Form.Label>Revenue Streams</Form.Label>
          <Form.Control
            as="textarea"
            name="businessModel.revenueStreams"
            rows={3}
            value={data.businessModel.revenueStreams}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="pricingStrategy">
          <Form.Label>Pricing Strategy</Form.Label>
          <Form.Control
            as="textarea"
            name="businessModel.pricingStrategy"
            rows={3}
            value={data.businessModel.pricingStrategy}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>

        <h2 className="text-secondary">Team Information</h2>
        <Form.Group controlId="founders">
          <Form.Label>Founders & Key Team Members</Form.Label>
          <Form.Control
            as="textarea"
            name="team.founders"
            rows={3}
            value={data.team.founders}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="advisors">
          <Form.Label>Advisors & Board Members</Form.Label>
          <Form.Control
            as="textarea"
            name="team.advisors"
            rows={3}
            value={data.team.advisors}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>

        <h2 className="text-secondary">Competitive Analysis</h2>
        <Form.Group controlId="competitors">
          <Form.Label>Competitors</Form.Label>
          <Form.Control
            as="textarea"
            name="competitiveAnalysis.competitors"
            rows={3}
            value={data.competitiveAnalysis.competitors}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="competitiveAdvantage">
          <Form.Label>Competitive Advantage</Form.Label>
          <Form.Control
            as="textarea"
            name="competitiveAnalysis.competitiveAdvantage"
            rows={3}
            value={data.competitiveAnalysis.competitiveAdvantage}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>

        <h2 className="text-secondary">Customer Validation</h2>
        <Form.Group controlId="traction">
          <Form.Label>Traction</Form.Label>
          <Form.Control
            as="textarea"
            name="customerValidation.traction"
            rows={3}
            value={data.customerValidation.traction}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="caseStudies">
          <Form.Label>Case Studies or Testimonials</Form.Label>
          <Form.Control
            as="textarea"
            name="customerValidation.caseStudies"
            rows={3}
            value={data.customerValidation.caseStudies}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>

        <h2 className="text-secondary">Investment Opportunity</h2>
        <Form.Group controlId="investmentTerms">
          <Form.Label>Investment Terms</Form.Label>
          <Form.Control
            as="textarea"
            name="investmentOpportunity.investmentTerms"
            rows={3}
            value={data.investmentOpportunity.investmentTerms}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="exitStrategy">
          <Form.Label>Exit Strategy</Form.Label>
          <Form.Control
            as="textarea"
            name="investmentOpportunity.exitStrategy"
            rows={3}
            value={data.investmentOpportunity.exitStrategy}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>

        <h2 className="text-secondary">Legal Information</h2>
        <Form.Group controlId="businessStructure">
          <Form.Label>Business Structure</Form.Label>
          <Form.Control
            as="textarea"
            name="legalInformation.businessStructure"
            rows={3}
            value={data.legalInformation.businessStructure}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="intellectualProperty">
          <Form.Label>Intellectual Property</Form.Label>
          <Form.Control
            as="textarea"
            name="legalInformation.intellectualProperty"
            rows={3}
            value={data.legalInformation.intellectualProperty}
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>

        <h2 className="text-secondary">File Uploads</h2>
        <Form.Group controlId="videoUpload">
          <Form.Label>Upload Video</Form.Label>
          <Form.Control
            type="file"
            name="video"
            accept="video/*"
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="companyReportExcel">
          <Form.Label>Upload Company Report (Excel)</Form.Label>
          <Form.Control
            type="file"
            name="companyReportExcel"
            accept=".xlsx, .xls"
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="companyReportPdf">
          <Form.Label>Upload Company Report (PDF)</Form.Label>
          <Form.Control
            type="file"
            name="companyReportPdf"
            accept=".pdf"
            onChange={handleInputChange}
            className="mb-3"
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
