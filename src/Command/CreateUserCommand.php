<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:create-users',
    hidden: false,
    aliases: ['app:add-users']
)]
class CreateUserCommand extends Command
{
    private $em;
    private $userPasswordHasher;
    public function __construct(ManagerRegistry $doctrine, UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->em = $doctrine->getManager();
        $this->userPasswordHasher = $userPasswordHasher;
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->setDescription('This command creates some users to use in developement mode.')
            ->setHelp('This command allows you to create some users to use in developement mode.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // *** Add or modify users
        $userData = [
            ['username' => 'admin', 'email' => 'admin@dev.com', 'roles' => '["ROLE_ADMIN"]', 'password' => '0123456789', 'nom' => 'admin', 'prenom' => 'admin'],
            ['username' => 'manager', 'email' => 'manager@dev.com', 'roles' => '["ROLE_MANAGER"]', 'password' => '0123456789', 'nom' => 'manager', 'prenom' => 'manager'],
            ['username' => 'testuser1', 'email' => 'testuser1@dev.com', 'roles' => '["ROLE_USER"]', 'password' => '0123456789', 'nom' => 'user1', 'prenom' => 'user1'],
            ['username' => 'testuser2', 'email' => 'testuser2@dev.com', 'roles' => '["ROLE_USER"]', 'password' => '0123456789', 'nom' => 'user2', 'prenom' => 'user2']
        ];

        try {
            foreach ($userData as $data) {
                $existingUser = $this->em->getRepository(User::class)->findOneBy(['username' => $data['username']]);

                if ($existingUser) {
                    $output->writeln("User '{$data['username']}' already exists. Skipping...");
                    continue;
                }

                $user = new User();
                $user->setUsername($data['username']);
                $user->setEmail($data['email']);
                $user->setRoles(json_decode($data['roles'], true));
                $user->setPassword($this->userPasswordHasher->hashPassword(
                    $user,
                    $data['password']
                ));
                $user->setNom($data['nom']);
                $user->setPrenom($data['prenom']);

                $this->em->persist($user);
            }

            $this->em->flush();

            $output->writeln('Test data has been generated successfully!');
            return Command::SUCCESS;
        } catch (\Exception $e) {
            $output->writeln('An error occurred while generating test data: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }
}
