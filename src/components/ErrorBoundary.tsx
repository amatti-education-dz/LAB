import * as React from 'react';
import { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      let errorMessage = 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.';
      
      try {
        const parsedError = JSON.parse(this.state.error?.message || '');
        if (parsedError.error && parsedError.operationType) {
          if (parsedError.isOffline) {
            errorMessage = "فشل الاتصال بقاعدة البيانات. يرجى التأكد من إنشاء قاعدة بيانات Firestore في Firebase Console وتفعيلها في وضع الإنتاج.";
          } else {
            errorMessage = `خطأ في قاعدة البيانات (${parsedError.operationType}): ${parsedError.error}`;
          }
        }
      } catch (e) {
        if (this.state.error?.message) {
          errorMessage = this.state.error.message;
        }
      }

      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-[#fcf9f3] rounded-2xl border-2 border-dashed border-[#c4c8bd]">
          <div className="w-16 h-16 bg-error/10 text-error rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h2 className="text-2xl font-black text-[#2b3d22] mb-4">عذراً، حدث خطأ ما</h2>
          <p className="text-[#5c6146] mb-8 max-w-md">{errorMessage}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-[#2b3d22] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-all"
          >
            إعادة تحميل الصفحة
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
