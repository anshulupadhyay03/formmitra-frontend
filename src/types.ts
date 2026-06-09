export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  media?: {
    type: 'image' | 'pdf';
    name: string;
    url?: string;
  };
}

export interface UseCaseData {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  exampleForm: string;
  primaryFields: string[];
  docRequired: string[];
}

export interface DemoFormState {
  fullName: string;
  dob: string;
  pan: string;
  address: string;
  aadhaar: string;
  income: number;
}
