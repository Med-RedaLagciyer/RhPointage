<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241115081751 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE us_module (id INT AUTO_INCREMENT NOT NULL, designation VARCHAR(255) NOT NULL, prefix VARCHAR(255) DEFAULT NULL, icon VARCHAR(255) DEFAULT NULL, ordre INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE us_operation (id INT AUTO_INCREMENT NOT NULL, sous_module_id INT DEFAULT NULL, link VARCHAR(255) DEFAULT NULL, icon VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, class_tag VARCHAR(255) DEFAULT NULL, id_tag VARCHAR(255) DEFAULT NULL, ordre INT DEFAULT NULL, align TINYINT(1) DEFAULT NULL, INDEX IDX_176B6B7FB4CB5EDE (sous_module_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE us_operation_user (us_operation_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_61201196585E0F6 (us_operation_id), INDEX IDX_6120119A76ED395 (user_id), PRIMARY KEY(us_operation_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE us_sous_module (id INT AUTO_INCREMENT NOT NULL, module_id INT DEFAULT NULL, link VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, prefix VARCHAR(255) DEFAULT NULL, ordre INT NOT NULL, INDEX IDX_411A14EBAFC2B591 (module_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles JSON NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, email VARCHAR(255) DEFAULT NULL, enable TINYINT(1) NOT NULL, nom VARCHAR(255) DEFAULT NULL, prenom VARCHAR(255) DEFAULT NULL, created DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_IDENTIFIER_USERNAME (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE us_operation ADD CONSTRAINT FK_176B6B7FB4CB5EDE FOREIGN KEY (sous_module_id) REFERENCES us_sous_module (id)');
        $this->addSql('ALTER TABLE us_operation_user ADD CONSTRAINT FK_61201196585E0F6 FOREIGN KEY (us_operation_id) REFERENCES us_operation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE us_operation_user ADD CONSTRAINT FK_6120119A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE us_sous_module ADD CONSTRAINT FK_411A14EBAFC2B591 FOREIGN KEY (module_id) REFERENCES us_module (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE us_operation DROP FOREIGN KEY FK_176B6B7FB4CB5EDE');
        $this->addSql('ALTER TABLE us_operation_user DROP FOREIGN KEY FK_61201196585E0F6');
        $this->addSql('ALTER TABLE us_operation_user DROP FOREIGN KEY FK_6120119A76ED395');
        $this->addSql('ALTER TABLE us_sous_module DROP FOREIGN KEY FK_411A14EBAFC2B591');
        $this->addSql('DROP TABLE us_module');
        $this->addSql('DROP TABLE us_operation');
        $this->addSql('DROP TABLE us_operation_user');
        $this->addSql('DROP TABLE us_sous_module');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
