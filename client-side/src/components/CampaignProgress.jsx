import { formatDistance } from 'date-fns';
// import { Campaign } from '../types';

// interface CampaignProgressProps {
//   campaign: Campaign;
// }

export function CampaignProgress({ campaign }) {
  const progress = campaign ? (campaign?.current_amount / campaign?.target_amount) * 100: 50;
  const timeLeft = formatDistance(new Date(campaign.end_date), new Date(), { addSuffix: true });

  return (
    <div className="bg-white py-2 rounded-lg shadow-sm">
      <div className="space-y-4">
        <div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-500">{Math.round(progress)}% funded</span>
            <span className="text-sm text-gray-500">{timeLeft}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <span className="text-2xl font-bold">${campaign.current_amount}</span>
            <span className="text-gray-500 text-sm ml-1">raised of ${campaign.target_amount}</span>
            {/* <span className="text-gray-500 text-sm ml-1">raised of ${campaign ? campaign.target_amount.toLocaleString(): 70}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}