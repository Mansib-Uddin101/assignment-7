import { useContext } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../context/FriendContext';

const Statspage = () => {
    const { contacts } = useContext(FriendContext);
    const getContactCounts = (contacts) => {
        return contacts.reduce((acc, contact) => {
            acc[contact.type] = (acc[contact.type] || 0) + 1;
            return acc;
        }, { call: 0, text: 0, video: 0 }); 
    };
    const counts = getContactCounts(contacts);
    const data = [
        { name: 'Call', value: counts.call, fill: '#244D3F' },
        { name: 'text', value: counts.text, fill: '#7F37F5' },
        { name: 'Video', value: counts.video, fill: '#37A163' }
    ];
    
    return (
        <div className='pt-10 w-5/6 mx-auto'>
            <h1 className='text-4xl font-bold'>Friendship Analytics</h1>
            <div className='my-10 shadow rounded-md border border-slate-300 container mx-auto p-4'>
                <h2 className='text-2xl font-bold'>Your Interaction Data</h2>
                <PieChart style={{ width: '100%', margin: "auto", maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend />
                    <Tooltip />
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </PieChart>
            </div>
        </div>
    )
}

export default Statspage
