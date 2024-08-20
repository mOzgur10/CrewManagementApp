import { Certificate } from './models/certificate.model';
import { CrewMember } from './models/crewMember.model';


export const certificates: Certificate[] = [
  new Certificate(1, 'Safety Training', new Date('2022-01-01'), new Date('2025-01-01')),
  new Certificate(2, 'Medical Certification', new Date('2023-06-15'), new Date('2026-06-15')),
  new Certificate(3, 'Firefighting Training', new Date('2021-09-10'), new Date('2024-09-10')),
  new Certificate(4, 'Navigation Certification', new Date('2020-03-20'), new Date('2023-03-20')),
  new Certificate(5, 'First Aid Certification', new Date('2022-12-05'), new Date('2025-12-05'))
];


export const crewMembers: CrewMember[] = [
  new CrewMember(1,'Jack', 'Sparrow', 'American', 'Captain', 180, 300, 'USD', [certificates[0], certificates[1],certificates[4]]),
  new CrewMember(2,'Oscar', 'Wilde', 'Irish', 'Engineer', 150, 250, 'USD', [certificates[2], certificates[3]]),
  new CrewMember(3,'Carlos', 'Garcia', 'Spanish', 'Cooker', 200, 200, 'EUR', [certificates[4], certificates[1]]),
  new CrewMember(4,'Edoardo', 'Bianchi', 'Italian', 'Mechanicer', 220, 280, 'EUR', [certificates[2], certificates[1]]),
  new CrewMember(5,'Sophie', 'Dubois', 'French', 'Navigator', 170, 320, 'USD', [certificates[4]])
];