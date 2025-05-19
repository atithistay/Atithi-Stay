
// components/pg-details/PGRules.jsx
import { AlertCircle, Clock } from 'lucide-react';

export default function PGRules({ rules }) {
  const curfewTime = rules.find(rule => rule.id === 'curfew')?.details;
  const hasVisitorRestrictions = rules.some(rule => rule.id === 'visitors');
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center">
        <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
        House Rules
      </h2>
      
      {curfewTime && (
        <div className="mt-4 flex items-center bg-blue-50 p-3 rounded-md">
          <Clock className="h-5 w-5 text-blue-600 mr-2" />
          <div>
            <p className="text-blue-700 font-medium">Entry/Exit Time</p>
            <p className="text-sm text-blue-600">{curfewTime}</p>
          </div>
        </div>
      )}
      
      <div className="mt-4 space-y-3">
        {rules.filter(rule => rule.id !== 'curfew').map((rule) => (
          <div key={rule.id} className="flex items-start">
            <div className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0">•</div>
            <div>
              <p className="text-gray-700">{rule.name}</p>
              {rule.details && <p className="text-sm text-gray-500 mt-1">{rule.details}</p>}
            </div>
          </div>
        ))}
      </div>
      
      {hasVisitorRestrictions && (
        <div className="mt-5 text-sm text-gray-500">
          <p>Please note: This property has specific visitor restrictions. Contact the property manager for more details.</p>
        </div>
      )}
    </div>
  );
}
