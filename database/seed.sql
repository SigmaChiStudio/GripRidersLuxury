INSERT INTO users (name, email, password, created_at) VALUES
('Admin User', 'admin@gripridersluxury.com', 'hashed_password', NOW()),
('John Doe', 'john@example.com', 'hashed_password', NOW()),
('Jane Smith', 'jane@example.com', 'hashed_password', NOW());

INSERT INTO categories (name, description, created_at) VALUES
('Productos de Belleza', 'Productos diseñados para embellecer y cuidar tu moto.', NOW()),
('Artículos de Mantenimiento', 'Todo lo necesario para el mantenimiento de tu moto.', NOW()),
('Accesorios de Lujo', 'Accesorios exclusivos para motocicletas de alta gama.', NOW());

INSERT INTO products (name, description, price, category_id, stock, created_at) VALUES
('Cera para Moto', 'Cera de alta calidad para un brillo duradero.', 50.00, 1, 100, NOW()),
('Aceite de Motor', 'Aceite sintético para un rendimiento óptimo.', 30.00, 2, 200, NOW()),
('Guantes de Cuero', 'Guantes de cuero de lujo para motociclistas.', 75.00, 3, 150, NOW());

INSERT INTO coupons (code, discount, created_at) VALUES
('LUJO10', 10, NOW()),
('BELLEZA15', 15, NOW());

INSERT INTO reviews (product_id, user_id, rating, comment, created_at) VALUES
(1, 2, 5, 'Excelente producto, mi moto brilla como nueva.', NOW()),
(2, 3, 4, 'Buen aceite, aunque un poco caro.', NOW()),
(3, 2, 5, 'Los guantes son muy cómodos y elegantes.', NOW());