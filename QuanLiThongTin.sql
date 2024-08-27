CREATE DATABASE IOT;

USE IOT;

CREATE TABLE sensor_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    temp DECIMAL(5,2),
    humid DECIMAL(5,2),
    light DECIMAL(5,2),
    time DATETIME DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO sensor_data (temp, humid, light, time) 
VALUES
	(25.3, 60.2, 150.0, NOW()),
    (25.3, 60.2, 150.0, NOW()),
    (25.3, 60.2, 150.0, NOW()),
    (25.3, 60.2, 150.0, NOW()),
	(25.3, 60.2, 150.0, NOW()),
    (25.3, 60.2, 150.0, NOW()),
    (25.3, 60.2, 150.0, NOW());

SELECT * FROM sensor_data;

CREATE TABLE device_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    device VARCHAR(255) NOT NULL,
    action VARCHAR(255) NOT NULL,
    time DATETIME NOT NULL
);

INSERT INTO device_history (device, action, time) VALUES
('Thiết bị 1', 'Bật', '2024-08-20 08:30:00'),
('Thiết bị 2', 'Tắt', '2024-08-20 09:00:00'),
('Thiết bị 3', 'Bật', '2024-08-20 09:30:00'),
('Thiết bị 4', 'Tắt', '2024-08-20 10:00:00'),
('Thiết bị 5', 'Bật', '2024-08-20 11:30:00'),
('Thiết bị 6', 'Tắt', '2024-08-20 12:00:00'),
('Thiết bị 7', 'Bật', '2024-08-20 13:30:00'),
('Thiết bị 8', 'Tắt', '2024-08-20 14:19:00'),
('Thiết bị 9', 'Bật', '2024-08-20 15:30:00'),
('Thiết bị 10', 'Tắt', '2024-08-20 16:00:00'),
('Thiết bị 11', 'Bật', '2024-08-20 17:30:00'),
('Thiết bị 12', 'Tắt', '2024-08-20 18:00:00');


