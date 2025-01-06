import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, pdf } from '@react-pdf/renderer';
import { RentDetails } from '../types';
import { format, eachMonthOfInterval, endOfMonth, startOfMonth } from 'date-fns';
import { Download, ArrowLeft } from 'lucide-react';

// Use standard fonts that come with react-pdf
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica'
  },
  border: {
    padding: 30,
    margin: 15,
    borderWidth: 0.5,
    borderColor: '#666666',
    backgroundColor: '#ffffff'
  },
  titleRow: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 4
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    textTransform: 'uppercase',
    color: '#1e293b'
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 15,
    color: '#475569'
  },
  periodText: {
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 20,
    color: '#475569'
  },
  horizontalLine: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#94a3b8',
    width: '100%',
    marginVertical: 15
  },
  mainContent: {
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 25,
    textAlign: 'justify',
    color: '#1e293b'
  },
  twoColumnLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10
  },
  column: {
    width: '48%'
  },
  detailRow: {
    marginBottom: 10,
    backgroundColor: '#f8fafc',
    padding: 8,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#475569',
    width: '40%'
  },
  value: {
    fontSize: 11,
    color: '#1e293b',
    width: '60%',
    textAlign: 'right'
  },
  date: {
    fontSize: 11,
    marginTop: 25,
    textAlign: 'right',
    color: '#475569'
  },
  boldText: {
    fontWeight: 'bold',
    color: '#1e293b'
  },
  panText: {
    fontSize: 10,
    marginTop: 4,
    color: '#64748b'
  },
  landlordSection: {
    marginTop: 30,
    borderTop: '0.5pt solid #94a3b8',
    paddingTop: 15
  },
  landlordText: {
    fontSize: 11,
    textAlign: 'right',
    color: '#1e293b'
  },
  landlordName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'right',
    color: '#1e293b'
  },
  transactionDetails: {
    marginBottom: 15,
    backgroundColor: '#f8fafc',
    padding: 8,
    borderRadius: 2
  },
  transactionId: {
    fontSize: 11,
    color: '#1e293b',
    fontFamily: 'Helvetica'
  },
  detailsSection: {
    marginTop: 20,
    width: '60%'
  },
  mobileContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    backgroundColor: 'white',
    zIndex: 50
  }
});

interface Props {
  details: RentDetails;
  onBack?: () => void;
}

const formatCurrency = (amount: number) => {
  return `Rs ${amount.toLocaleString('en-IN')}`;
};

export function RentReceipt({ details, onBack }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  
  if (!details.rentFrom || !details.rentTill) return null;

  const months = eachMonthOfInterval({
    start: details.rentFrom,
    end: details.rentTill
  });

  const totalRent = details.monthlyRent * months.length;
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDownload = async () => {
    try {
      const documentContent = (
        <Document>
          {details.receiptType === 'CONSOLIDATED' ? (
            <Page size="A4" style={styles.page}>
              <View style={styles.border}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>Receipt of House Rent</Text>
                  <Text style={styles.subtitle}>Under Section 10(13A) of Income Tax Act</Text>
                </View>

                <Text style={styles.periodText}>
                  From {format(details.rentFrom, 'dd/MM/yyyy')} to {format(details.rentTill, 'dd/MM/yyyy')}
                </Text>

                <View style={styles.horizontalLine} />

                <Text style={styles.mainContent}>
                  Received a sum of {formatCurrency(totalRent)} from the occupant, <Text style={styles.boldText}>{details.tenantName}</Text> via {details.paymentMethod.replace('_', ' ')} towards the rent of property located at <Text style={styles.boldText}>{details.address}</Text> for the period from {format(details.rentFrom, 'dd/MM/yyyy')} to {format(details.rentTill, 'dd/MM/yyyy')} ({months.length} months at the rate of {formatCurrency(details.monthlyRent)} per month)
                </Text>

                <View style={styles.detailsSection}>
                  <View style={styles.detailRow}>
                    <Text style={styles.label}>Property Address:</Text>
                    <Text style={styles.value}>{details.address}</Text>
                  </View>

                  {details.landlordPan && (
                    <View style={styles.detailRow}>
                      <Text style={styles.label}>Owner's PAN:</Text>
                      <Text style={styles.value}>{details.landlordPan?.toUpperCase()}</Text>
                    </View>
                  )}

                  {details.paymentMethod !== 'CASH' && 
                   details.includeTransactionIds && 
                   Object.keys(details.transactionIds).length > 0 && (
                    <View style={styles.detailRow}>
                      <Text style={styles.label}>Transaction IDs:</Text>
                      <Text style={styles.value}>
                        {Object.values(details.transactionIds).join(', ')}
                      </Text>
                    </View>
                  )}
                </View>

                <View style={styles.landlordSection}>
                  <Text style={styles.landlordText}>Landlord</Text>
                  <Text style={styles.landlordName}>{details.landlordName}</Text>
                  <Text style={styles.date}>Date: {format(new Date(), 'dd/MM/yyyy')}</Text>
                </View>
              </View>
            </Page>
          ) : (
            months.map((month) => {
              const monthKey = format(month, 'yyyy-MM');
              const periodStart = startOfMonth(month);
              const periodEnd = endOfMonth(month);
              const receiptDate = new Date(periodEnd.getTime() + 24 * 60 * 60 * 1000);

              return (
                <Page key={monthKey} size="A4" style={styles.page}>
                  <View style={styles.border}>
                    <View style={styles.titleRow}>
                      <Text style={styles.title}>Receipt of House Rent</Text>
                      <Text style={styles.subtitle}>Under Section 10(13A) of Income Tax Act</Text>
                    </View>

                    <Text style={styles.periodText}>
                      From {format(periodStart, 'dd/MM/yyyy')} to {format(periodEnd, 'dd/MM/yyyy')}
                    </Text>

                    <View style={styles.horizontalLine} />

                    <Text style={styles.mainContent}>
                      Received a sum of <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#1e293b', letterSpacing: 0.5 }}>{formatCurrency(details.monthlyRent)}</Text> from the occupant, <Text style={styles.boldText}>{details.tenantName}</Text> via {details.paymentMethod.replace('_', ' ')} towards the rent of property located at <Text style={styles.boldText}>{details.address}</Text> for the period from {format(periodStart, 'dd/MM/yyyy')} to {format(periodEnd, 'dd/MM/yyyy')}
                    </Text>

                    <View style={styles.detailsSection}>
                      <View style={styles.detailRow}>
                        <Text style={styles.label}>Property Address:</Text>
                        <Text style={styles.value}>{details.address}</Text>
                      </View>

                      {details.landlordPan && (
                        <View style={styles.detailRow}>
                          <Text style={styles.label}>Owner's PAN:</Text>
                          <Text style={styles.value}>{details.landlordPan?.toUpperCase()}</Text>
                        </View>
                      )}

                      {details.paymentMethod !== 'CASH' && 
                       details.includeTransactionIds && 
                       details.transactionIds[monthKey] && (
                        <View style={styles.detailRow}>
                          <Text style={styles.label}>Transaction ID:</Text>
                          <Text style={styles.value}>{details.transactionIds[monthKey]}</Text>
                        </View>
                      )}
                    </View>

                    <View style={styles.landlordSection}>
                      <Text style={styles.landlordText}>Landlord</Text>
                      <Text style={styles.landlordName}>{details.landlordName}</Text>
                      <Text style={styles.date}>Date: {format(receiptDate, 'dd/MM/yyyy')}</Text>
                    </View>
                  </View>
                </Page>
              );
            })
          )}
        </Document>
      );

      const blob = await pdf(documentContent).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const fileName = details.receiptType === 'CONSOLIDATED' 
        ? `rent-receipt-${details.tenantName.toLowerCase().replace(/\s+/g, '-')}-consolidated.pdf`
        : `rent-receipt-${details.tenantName.toLowerCase().replace(/\s+/g, '-')}-${format(details.rentFrom, 'MMM-yyyy')}-to-${format(details.rentTill, 'MMM-yyyy')}.pdf`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-white z-50">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200">
            <button
              onClick={onBack}
              className="flex items-center text-gray-700"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Edit
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-sm space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Download Rent Receipt
                </h3>
                <p className="text-sm text-gray-500">
                  PDF preview is not available on mobile devices. Click below to download your receipt.
                </p>
              </div>

              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-coral-500 rounded-md hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <PDFViewer className="w-full h-full">
        <Document>
          {months.map((month, index) => {
            const monthKey = format(month, 'yyyy-MM');
            const periodStart = startOfMonth(month);
            const periodEnd = endOfMonth(month);
            const receiptDate = new Date(periodEnd.getTime() + 24 * 60 * 60 * 1000);

            return (
              <Page key={monthKey} size="A4" style={styles.page}>
                <View style={styles.border}>
                  <View style={styles.titleRow}>
                    <Text style={styles.title}>Receipt of House Rent</Text>
                    <Text style={styles.subtitle}>Under Section 10(13A) of Income Tax Act</Text>
                  </View>

                  <Text style={styles.periodText}>
                    From {format(periodStart, 'dd/MM/yyyy')} to {format(periodEnd, 'dd/MM/yyyy')}
                  </Text>

                  <View style={styles.horizontalLine} />

                  <Text style={styles.mainContent}>
                    Received a sum of <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#1e293b', letterSpacing: 0.5 }}>{formatCurrency(details.monthlyRent)}</Text> from the occupant, <Text style={styles.boldText}>{details.tenantName}</Text> via {details.paymentMethod.replace('_', ' ')} towards the rent of property located at <Text style={styles.boldText}>{details.address}</Text> for the period from {format(periodStart, 'dd/MM/yyyy')} to {format(periodEnd, 'dd/MM/yyyy')}
                  </Text>

                  <View style={styles.detailsSection}>
                    <View style={styles.detailRow}>
                      <Text style={styles.label}>Property Address:</Text>
                      <Text style={styles.value}>{details.address}</Text>
                    </View>

                    {details.landlordPan && (
                      <View style={styles.detailRow}>
                        <Text style={styles.label}>Owner's PAN:</Text>
                        <Text style={styles.value}>{details.landlordPan?.toUpperCase()}</Text>
                      </View>
                    )}

                    {details.paymentMethod !== 'CASH' && 
                     details.includeTransactionIds && 
                     details.transactionIds[monthKey] && (
                      <View style={styles.detailRow}>
                        <Text style={styles.label}>Transaction ID:</Text>
                        <Text style={styles.value}>{details.transactionIds[monthKey]}</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.landlordSection}>
                    <Text style={styles.landlordText}>Landlord</Text>
                    <Text style={styles.landlordName}>{details.landlordName}</Text>
                    <Text style={styles.date}>Date: {format(receiptDate, 'dd/MM/yyyy')}</Text>
                  </View>
                </View>
              </Page>
            );
          })}
        </Document>
      </PDFViewer>
    </div>
  );
}