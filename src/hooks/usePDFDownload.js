import { useCallback } from 'react';

export const usePDFDownload = () => {
  const downloadPDF = useCallback(async (pdfPath, filename) => {
    try {
      // Method 1: Try fetch with blob
      const response = await fetch(pdfPath, {
        method: 'GET',
        headers: {
          'Accept': 'application/pdf',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      
      // Check if the response is actually a PDF
      if (blob.type !== 'application/pdf' && !blob.type.includes('pdf')) {
        console.warn('Response might not be a PDF, trying alternative method');
        throw new Error('Invalid PDF response');
      }

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename || pdfPath.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Fetch method failed, trying direct download:', error);
      
      // Method 2: Direct link with download attribute
      try {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = filename || pdfPath.split('/').pop();
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (directError) {
        console.error('Direct download also failed:', directError);
        
        // Method 3: Fallback to window.open
        window.open(pdfPath, '_blank');
      }
    }
  }, []);

  return { downloadPDF };
}; 