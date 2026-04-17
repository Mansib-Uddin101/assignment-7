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
    const data = [
        { name: 'Call', value: getContactCounts.call, fill: '#0088FE' },
        { name: 'text', value: getContactCounts.text, fill: '#00C49F' },
        { name: 'Video', value: getContactCounts.video, fill: '#FFBB28' }
    ];
    console.log(getContactCounts.call, getContactCounts.text, getContactCounts.video);
    
    return (
        <div>
            <div className='my-10 shadow p-1o rounded-md border border-slate-300 container mx-auto'>
                <h2>Your Interaction Data</h2>
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
